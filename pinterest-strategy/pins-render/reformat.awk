# Reformat pin library: strip markdown emphasis, flatten each pin to
# Title: / Image Design: / Description: / Destination: lines. Content untouched.
BEGIN { dest = "" }

/^## .*https/ {
  match($0, /`https[^`]*`/)
  dest = substr($0, RSTART + 1, RLENGTH - 2)
}

/^### Pin/ {
  line = $0
  sub(/^### /, "", line)
  print line
  next
}

/^\*\*Description/ {
  line = $0
  gsub(/\*\*|`|\*/, "", line)
  print line
  print "Destination: " dest
  next
}

{
  line = $0
  gsub(/\*\*|`|\*/, "", line)
  print line
}
