/** The report is stamped when the site is built, so the time is the last deploy. */
export function stamp() {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  const date = `${d.getUTCFullYear()}-${p(d.getUTCMonth() + 1)}-${p(d.getUTCDate())}`;
  const time = `${p(d.getUTCHours())}:${p(d.getUTCMinutes())}:${p(d.getUTCSeconds())}`;
  return {
    display: `${date} ${time} UTC`,
    file: `crash-${date}_${time.replaceAll(":", ".")}-client.txt`,
  };
}

export const QUIP = "// Works on my machine.";
