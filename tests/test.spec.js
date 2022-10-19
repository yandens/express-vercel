const product = require('../controllers')

const mockRequest = (body = {}) => ({ body })
const mockResponse = () => {
  const res = {}
  res.json = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  return res;
}

describe('product.index.fuction', () => {
  // case if succes
  test('res.json called with {status: 200, message: "Get Data Successfully"}', done => {
    const req = mockRequest()
    const res = mockResponse()

    product.index(req, res)
    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
      status: true,
      message: 'Get Data Successfully'
    })
    done()
  })
})

describe('product.test.fuction', () => {
  // case if success
  test('res.json called with {status: 200, message: "Testing Github Actions"}', done => {
    const req = mockRequest()
    const res = mockResponse()

    product.test(req, res)
    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
      status: true,
      message: 'Testing Github Actions'
    })
    done()
  })
})
