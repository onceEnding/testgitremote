
class userStore{
  @observable num = 0
  @action
  changeNum() {
    this.num++
  }
}

export default userStore