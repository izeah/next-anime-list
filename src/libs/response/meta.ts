abstract class Meta {
  protected success: boolean;
  protected msg: string;
  protected description: null | undefined | any | any[] | string;
  protected data: any;

  constructor(success: boolean, msg: string) {
    this.success = success;
    this.msg = msg;
    this.description = msg;
    this.data = null;
  }

  protected toJSON(): any {
    return {
      success: this.success,
      msg: this.msg,
      description: this.description,
      data: this.data,
    };
  }
}

export default Meta;
