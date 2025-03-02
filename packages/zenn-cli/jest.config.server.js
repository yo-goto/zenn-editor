// esmが使われているパッケージを宣言
const esmPackages = [
  'boxen',
  'string-width',
  'strip-ansi',
  'ansi-regex',
  'wrap-ansi',
  'widest-line',
  'ansi-styles',
  'configstore',
  'xdg-basedir',
  'unique-string',
  'crypto-random-string',
];

module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.[jt]s$': '@swc/jest',
  },
  testMatch: ['<rootDir>/src/server/__tests__/**/*.test.ts'],
  resetMocks: true,

  // esmが使われているパッケージはcommonjsにトランスパイルする必要があるため
  // esmパッケージのみを`transform`の対象に含める
  // pnpmではルートの.pnpmにインストールされるため、それを考慮したパスを指定する必要がある
  transformIgnorePatterns: [
    `node_modules/(?!(?:.pnpm/)?(${esmPackages.join('|')}))`,
  ],
};
