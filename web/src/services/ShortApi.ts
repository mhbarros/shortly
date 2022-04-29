export class ShortApi {
  static async short(url: string) {
    const response = await fetch("https://short.mhbarros.com.br/short", {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });

    return response.json();
  }
}
