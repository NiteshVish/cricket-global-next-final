export const HttpMethod = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
};



 const ApiRoutes = {
    auth:{
        signup:{
            Method:HttpMethod.Post,
            Endpoint:"auth/sign-up"
        },
        login:{
            Method:HttpMethod.Post,
            Endpoint:"auth/login"
        },
        reset:{
            Method:HttpMethod.Post,
            Endpoint:"auth/reset-password"
        },
        forget:{
            Method:HttpMethod.Post,
            Endpoint:"auth/forget-password"
        },
        ticketdetails:{
            Method:HttpMethod.Post,
            Endpoint:"auth/"
        }
    }
}
export default ApiRoutes