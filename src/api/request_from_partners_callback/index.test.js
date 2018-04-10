import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes from '.'
import callback_body from './callback_body'

const app = () => express(apiRoot, routes)

test('POST /request_from_partners_callbacks 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`).send(callback_body);
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
})
