import encode from '../src/encode/index'
import decode from '../src/decode/index'

describe('end-to-end', () => {
  it('shouldn\'t mess up the data', (done) => {
    const data = encode.encodeString('foobar').dataURL
    const res = decode.decodeToString(data)

    res.then(data => {
      expect(data).toBe('foobar')
      done()
    })
  })
})
