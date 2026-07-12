---
title: "Cookie Monster"
date: 2026-07-10
excerpt: "A login form that trusts its own cookie a little too much. Flip one byte, become admin."
category: web
event: "picoCTF 2026"
tags: [cookies, auth-bypass]
---

The challenge hands you a login page and a guest account. The flag lives behind
an admin-only dashboard. Classic privilege escalation.

## Recon

After logging in as `guest`, the response sets a cookie:

```http
Set-Cookie: role=Z3Vlc3Q%3D; Path=/
```

URL-decoded that's `Z3Vlc3Q=`, and base64-decoded it's just `guest`. The server
is trusting a client-controlled, unsigned value to decide who you are.

## The bypass

Re-encode `admin` and swap it in:

```bash
python3 -c "import base64; print(base64.b64encode(b'admin').decode())"
# YWRtaW4=
```

Set `role=YWRtaW4%3D`, reload the dashboard, and the flag drops.

> Lesson: a role in a cookie has to be signed (or better, kept server-side).
> Base64 is an encoding, not a lock.
