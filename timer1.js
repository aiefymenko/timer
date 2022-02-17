const timer = process.argv.slice(2);
for (let elem of timer) {
  if (elem > 0) {
  setTimeout(() => {
    process.stdout.write('.');
 }, elem * 1000);
}
}