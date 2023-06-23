module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(message) => /^chore\(release\):/.test(message)],
};
