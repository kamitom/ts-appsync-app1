import { Handler } from 'aws-lambda';
import 'source-map-support/register';
// import * as faker from 'faker';
import faker from 'faker';

type MeEvent = {
  userId: string;
  username: string;
};

type MeResult = {
  id: string;
  name: string;
  email?: string;
  birthday?: string;
};


export const hellome: Handler<MeEvent, MeResult> = async (event, _context) => {
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
  //     input: event,
  //   }, null, 2),
  // };

  console.log('Event: ', JSON.stringify(event, null, 2))
  console.log('_context: ', JSON.stringify(_context, null, 2))

  let { userId, username } = event;

  username = faker.name.findName();
  userId = faker.random.uuid();

  return {
    id: userId,
    name: username,
    // email: userId + username
    // birthday: userId + username
  }

}
