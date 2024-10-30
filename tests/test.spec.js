import supertest from "supertest";

let request = supertest(process.env.BASE_URL);

describe("test graphic", () => {
  describe("create graphic ", () => {
    it("create graphic succeess", async () => {
      let request_body = {
        name: "ลาเต้",
        thumbnailUrl:
          "https://storage.googleapis.com/smile-migraine-image-public-dev/graphic/7395f1f9-ba14-4f01-82ba-ad626a71e12e.webp",
      };

      let res = await request
        .post("/v1/admin/management/graphics")
        .set(
          "authorization",
          "bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzAyODE2MzAsImlhdCI6MTczMDI3ODAzMCwiaWQiOjMyfQ.EnVq9_GQDmDjm-w9rocEYIxLzxSmcZm_dMZgkNVbHCwRcM0njTT8dWyTC1EUaUmRp1LAZBkcmCsdWpP6-nKIfA"
        )
        .send(request_body);

      expect(res.status).toEqual(200);
    });
  });
});
