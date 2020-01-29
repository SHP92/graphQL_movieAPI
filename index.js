/*
WHY graphQL?
    1) over-fetching : 요구하는 정보보다 더 많이 서버에서 받아오는 것
    2) under-fetching : 원하는 정보를 얻기위해 서버에 여러번 요청하는 것
    --> graphQL을 사용하면 원하는 정보만 request해서 
        JSON 형태로 return 받을 수 있음
        requset {
            info {

            }
        }
        return : {
            info : {

            }
        }

    3) resolvers
*/

import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers.js';

const server = new GraphQLServer({
    typeDefs: "schema.graphql" // schema
    , resolvers: resolvers // resolvers
});

server.start(() => console.log('graphQL server'));