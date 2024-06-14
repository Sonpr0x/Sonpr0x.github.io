---
author: origin
date: 2024-06-13
updated: 2024-06-13
tags:
  - ssh
  - automation
description: SSHv2 for automation
path: D:\Knowledge base\Knowledge tower\Notes\Main note/Home-lab/Paramiko automate.md
---

> Paramiko is a Python library that allows you to interact with SSH servers. It provides an easy-to-use interface for logging in, executing commands, transferring files, and managing SSH keys. Paramiko supports both `SSHv2` and `SFTP` protocols, making it a versatile tool for automation.

# Init object

```python
import paramiko

ssh = paramiko.SSHClient()

# Auto add to trusted
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

# Authen
ssh.connect('example.com', username='myuser', password='mypassword')

# Or authen with key
ssh.connect('example.com', username='myuser', key_filename='/path/to/keyfile')


```


# Excute command

Excute each command
```python
stdin, stdout, stderr = ssh.exec_command('ls')
print(stdout.read().decode())
```

Excute multiple command
```python
shell = ssh.invoke_shell()
shell.send('ls\n')
shell.send('pwd\n')
shell.send('whoami\n')
output = shell.recv(65535).decode()
print(output)
```

# Transfer file

Init object
```python
sftp = ssh.open_sftp()
```

Upload file
```python
sftp.put('/path/to/local/file', '/path/to/remote/file')
```

Download file
```python
sftp.get('/path/to/remote/file', '/path/to/local/file')
```

Close connection
```python
ssh.close()
```
