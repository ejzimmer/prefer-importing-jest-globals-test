describe("test", () => {
  it("uses jest globals", async () => {
    const mock = jest.fn();
    mock();
    expect(mock).toHaveBeenCalled();
  });
});
