const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md",
        "changelogTitle": "# Semantic Versioning Changelog"
      }
    ],
    [
      '@semantic-release/npm',

    ],
    [
      "@semantic-release/git",
      {
        "assets": ["CHANGELOG.md", 'package.json'],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes} "
      }
    ],
    [
      "@semantic-release/github",
      {
        "assets": "dist/*.tgz",
        "addRelease": "top",
      }
    ]
  ]
};

module.exports = config;
