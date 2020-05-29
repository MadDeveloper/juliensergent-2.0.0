export function sourceFilesToContent(files = []) {
  return files
    .reduce(
      (content, file) => `${content}

// ${file.name}
${file.code}`,
      ""
    )
    .trim()
}
