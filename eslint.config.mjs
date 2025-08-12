import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
}, {
  rules: {
    'ts/ban-ts-comment': 'off',
    'react/no-array-index-key': 'off',
    'react/no-use-context': 'off',
  },
})
