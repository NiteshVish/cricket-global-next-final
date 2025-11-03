import HttpClient from "./index.api";

class MembershipApi extends HttpClient {
  constructor() {
    super(process.env.NEXT_PUBLIC_API_URL);
  }

  async createMembershipPayment(payload) {
    return this.post("/user/create-membership-payment", payload);
  }

  async getAllPlans() {
    return this.get("/user/get-all-membership-plan");
  }
}

const membershipApi = new MembershipApi();
export default membershipApi;
