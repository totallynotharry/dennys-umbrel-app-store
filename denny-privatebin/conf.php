;<?php http_response_code(403); /*
; config file for PrivateBin

[main]
; Set a project name to be displayed on the website (optional)
name = "PrivateBin"

; Set the basepath to the local domain
basepath = "http://umbrel.local/"

; Enable discussion feature
discussion = true

; Preselect the discussion feature
opendiscussion = true

; Enable password protection for pastes
password = true

; Disable file uploads (you can enable this if needed)
fileupload = true

; Preselect burn-after-reading feature
burnafterreadingselected = true

; Set the default paste format (plaintext or syntax highlighting)
defaultformatter = "plaintext"

; Set the template (you can choose other templates like "bootstrap-dark" if preferred)
template = "bootstrap"

; Set a size limit for pastes (here 10 MB)
sizelimit = 10485760

; Disable language selection (as it's a local instance)
languageselection = false

; Default language
languagedefault = "de"

; Enable QR code generation for sharing pastes
qrcode = true

[expire]
; Default expiration time for pastes (1 week)
default = "1week"

[expire_options]
; Expiration time options (you can add or modify these)
5min = 300
10min = 600
1hour = 3600
1day = 86400
1week = 604800
1month = 2592000
1year = 31536000
never = 0

[formatter_options]
; Available formatters and their labels
plaintext = "Plain Text"
syntaxhighlighting = "Source Code"
markdown = "Markdown"

[traffic]
; Rate limit between requests from the same IP (10 seconds)
limit = 10

[purge]
; Time between purging expired pastes (in seconds)
limit = 300
; Maximum number of expired pastes to delete per purge
batchsize = 10

[model]
; Data storage model (filesystem for local storage)
class = Filesystem
[model_options]
dir = "data"

; Enable insecure HTTP warnings
httpwarning = false

; template to include, default is "bootstrap" (tpl/bootstrap.php), also
; available are "page" (tpl/page.php), the classic ZeroBin style and several
; bootstrap variants: "bootstrap-dark", "bootstrap-compact", "bootstrap-page",
; which can be combined with "-dark" and "-compact" for "bootstrap-dark-page"
; and finally "bootstrap-compact-page" - previews at:
; https://privatebin.info/screenshots.html
template = "bootstrap-dark"
