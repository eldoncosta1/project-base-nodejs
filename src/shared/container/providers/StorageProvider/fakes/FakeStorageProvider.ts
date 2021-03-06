import IStorageProvider from "../models/IStorageProvider";

class FakeStorageFile implements IStorageProvider {
  private storage: string[] = [];

  public async saveFile(file: string): Promise<string> {
    this.storage.push(file);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const findIndex = this.storage.findIndex(storageFile => storageFile === file);
    this.storage.splice(findIndex, 1);
  }

  public async writeFile(script: string, client_id: string): Promise<string> {
    this.storage.push(script);

    return script;
  }

}

export default FakeStorageFile;