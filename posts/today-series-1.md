---
title: Today's series
published: true
date: 2022-10-26 03:33:00
tags: day-by-day, documents, procedures, guides, security
description: xem hôm nay có gì nào
image:
---
Scan network tools, documents, benchmark hardden, guides, security baseline

### Some formats of markdown language
explain: `[^"number"]`, `[^"number"]:`   
math: `<math>`, `</math>`   

### Switch button change themes for website
HTML codes:
```html
<span>
	<input onclick="SwitchTheme()" type="checkbox" id="switch" />
	<label class="label" for="switch"></label>
</span>
```
JS codes:
```javascript
function SwitchTheme() {
  let checked = document.getElementById("switch").checked;
  
  if (checked) {
  	document.getElementById('theme').innerHTML = '<link id="theme" href="/css/theme-dark.css" rel="stylesheet" type="text/css">';
  } else {
  	document.getElementById('theme').innerHTML = '<link id="theme" href="/css/theme.css" rel="stylesheet" type="text/css">';
  }
}
```

### Command get current date data, format
```
Get-Date
Get-Date -Format "yyyy-MM-dd HH:mm K"
```
https://learn.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Utility/Get-Date?view=powershell-7.2&viewFallbackFrom=powershell-3.0

### Pentest tools
- SecLists   
https://github.com/danielmiessler/SecLists

- Metasploit   
https://docs.metasploit.com/docs/pentesting/metasploit-guide-ssh.html

- Nmap scan ports
	- Pn option (Treat all hosts as online -- skip host discovery)
	- Many ports open LOL
	- Scan hosts, regex for match pattern `([0-9]*\.){3}[0-9]*` redirect to file that save all live hosts /home/nmap
	- Gathering service infomation \hardden\scanned-26-10.txt
	- Distinguished regex vs wildcard

### Found some cves on my system
CVE-2021-36958   
CVE-2021-34527  
let's fix its  

### Benchmark score harddening system
https://github.com/0x6d69636b/windows_hardening
output: \hardden\scorecheck.txt   

### Problems with excute script on windows 11, powershell 5.2
https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2

- PowerShell execution policies:
	- AllSigned
	- Bypass
	- Default
	- RemoteSigned
	- Restricted
	- Undefined
	- Unrestricted

- Scopes:  
`Get-ExecutionPolicy -List`   
   
|     Scope     | ExecutionPolicy |
|---------------|-----------------|
| MachinePolicy | Undefined       |
| UserPolicy    | Undefined       |
| Process       | Undefined       |
| CurrentUser   | RemoteSigned    |
| LocalMachine  | AllSigned       |

- Change policy:   
 ```
 Set-ExecutionPolicy -ExecutionPolicy <PolicyName> -Scope <scope>
 example.exe -ExecutionPolicy AllSigned
 ```
More?:
Get-Item | Unblock-File

### Resources harddening
Cheatsheet ref cis:  
https://security.uconn.edu/server-hardening-standard-windows/#  
https://learn.microsoft.com/en-us/windows/security/  
https://learn.microsoft.com/en-us/windows/security/threat-protection/windows-security-configuration-framework/windows-security-baselines  
https://learn.microsoft.com/en-us/windows/security/threat-protection/windows-security-configuration-framework/security-compliance-toolkit-10  

Microsoft's service assurance, Implement policy, security baseline, hardening bla bla  
https://learn.microsoft.com/en-us/compliance/  
https://learn.microsoft.com/en-us/compliance/regulatory/offering-home  

CIS Benchmark PDFs download  
https://downloads.cisecurity.org/#/  


