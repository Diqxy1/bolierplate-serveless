/* eslint-disable @typescript-eslint/no-unused-vars */
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import { Person } from './models';

import AppError from '@shared/errors/AppError';
import ListUserService from './services/ListUsersService';

export const health = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ 'Health in': new Date().toLocaleString() }),
  };
};

export const create = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  if (event.body) {
    const person: Person = JSON.parse(event.body);

    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ Person: person }),
    };
  }

  throw new AppError('Internal server error', 500);
};

export const listUsers = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  const listUserService = new ListUserService();

  const users = await listUserService.execute();

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ Users: users }),
  };
};
