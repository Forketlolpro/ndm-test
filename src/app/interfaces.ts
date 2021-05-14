export interface ApiResponse {
  message: string;
  code: number;
  successful: boolean;
  payload: any;
}

export interface Route {
  uuid: string,
  address: string,
  mask: string,
  gateway: string,
  interface: RouteInterfaces
}

export enum RouteInterfaces {
  Vpn = 'VPN',
  Isp = 'ISP',
  Guest = 'Guest',
  Home = 'Home'
}

export const MASKS = [
  '255.255.255.255', '255.255.255.254', '255.255.255.252', '255.255.255.248', '255.255.255.240', '255.255.255.224',
  '255.255.255.192', '255.255.255.128', '255.255.255.0', '255.255.254.0', '255.255.252.0', '255.255.248.0',
  '255.255.240.0', '255.255.224.0', '255.255.192.0', '255.255.128.0', '255.255.0.0', '255.254.0.0', '255.252.0.0',
  '255.248.0.0', '255.240.0.0', '255.224.0.0', '255.192.0.0', '255.128.0.0', '255.0.0.0', '254.0.0.0', '252.0.0.0',
  '248.0.0.0', '240.0.0.0', '224.0.0.0', '192.0.0.0', '128.0.0.0', '0.0.0.0'
];
