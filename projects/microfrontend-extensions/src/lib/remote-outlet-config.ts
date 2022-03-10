export type RemoteOutletConfig = {
  remoteEntry: string;
  remoteName: string;
  module: string;
  component: string;

  placeholder?: {
    minHeight?: number
  };
}[]
