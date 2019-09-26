const baseUrl = "https://us-central1-petit-44c3c.cloudfunctions.net/petit";

const create = () => {
  const signOut = () => {};

  /*
     => return response
     => check status response
     if status === 200 => data = await response.json()
  */
  const request = async (
    method: "POST" | "GET" | "PUT" | "DELETE",
    url: string,
    param: Object,
  ) => {
    try {
      const options = {
        method,
        baseURL: baseUrl,
        url,
        data: param,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${UserModel.token}`,
        },
      };
      const {
        data: { status, results },
      } = await axios(options);
      const rs = await fetch(`${baseUrl}${url}`, {
        method: method.toUpperCase(),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // Authorization: `Bearer ${UserModel.token}`,
        },
        body: method.toUpperCase() !== "GET" ? body : null,
      });
      if (rs.status === 200) {
        return await rs.json();
      }
      if (rs.status === 400) {
        UserModel.token = token.token;
        return await request(method, url, param);
      }

      global.root.showMessage();
      return {};
    } catch (error) {
      console.log("request error: ", error);
      global.root.showMessage();
      return {};
    }
  };

  /*
    list Api
  */

  return {};
};

export default { create };
