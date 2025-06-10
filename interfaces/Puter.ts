export type PuterUser = {
  uuid: string;
  username: string;
  email_confirmed: boolean;
};

export type PuterFSItem = {
  id: string;
  uid: string;
  name: string;
  path: string;
  is_dir: boolean;
  parent_id: string;
  parent_uid: string;
  created: number;
  modified: number;
  accessed: number;
  size: number;
  writable: boolean;
};

export type PuterFSOptions = Record<'overwrite' | 'dedupeName' | 'createMissingParents', boolean>;

export type PuterSubdomain = {
  uid: string;
  subdomain: string;
  root_dir: PuterFSItem;
};

export type Puter = {
  auth: {
    getUser(): Promise<PuterUser>;
    signIn(): Promise<true>;
    signOut(): void;
    isSignedIn(): boolean;
  };
  fs: {
    upload(items: FileList | File[], path?: string, options?: PuterFSOptions): Promise<PuterFSItem[]>;
    write(path: string, data?: string | File, options?: PuterFSOptions): Promise<PuterFSItem>;
    read(path: string): Promise<PuterFSItem>;
    delete(path: string): Promise<never>;
  };
  hosting: {
    create(subdomain: string, path?: string): Promise<PuterSubdomain>;
    get(subdomain: string): Promise<PuterSubdomain>;
    delete(subdomain: string): Promise<never>;
  };
};
