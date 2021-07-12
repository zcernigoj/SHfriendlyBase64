function removeTrailingSpaces(string) {
  return string.split('\n').map(l => l.trimEnd()).join('\n');
}