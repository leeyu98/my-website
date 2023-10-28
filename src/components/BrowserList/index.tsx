import React, { ComponentType, SVGProps } from 'react';
import ChromeSvg from './browsers/chrome.svg';
import EdgeSvg from './browsers/edge.svg';
import FirefoxSvg from './browsers/firefox.svg';
import SafariSvg from './browsers/safari.svg';
import BraveSvg from './browsers/brave.svg';
import OperaSvg from './browsers/opera.svg';
import ElectronSvg from './browsers/electron.svg';

const browsers: Array<{
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}> = [
  { name: 'Chrome', Icon: ChromeSvg },
  { name: 'Edge', Icon: EdgeSvg },
  { name: 'Firefox', Icon: FirefoxSvg },
  { name: 'Opera', Icon: OperaSvg },
  { name: 'Brave', Icon: BraveSvg },
  { name: 'Safari', Icon: SafariSvg },
  { name: 'Electron', Icon: ElectronSvg },
];

enum Browser {
  chrome = 'chrome',
  edge = 'edge',
  firefox = 'firefox',
  safari = 'safari',
  opera = 'opera',
  electron = 'electron',
}

interface IProps {
  versions: Record<Browser, string | number>;
}

const BrowserList: React.FC<IProps> = ({ versions = {} }) => {
  const list = browsers
    .map((b) => {
      return { ...b, version: versions[b.name.toLocaleLowerCase()] };
    })
    .filter((b) => b.version);

  if (!list.length) {
    return null;
  }

  return (
    <table style={{ width: '100%' }}>
      <tbody style={{ width: '100%' }}>
        <tr>
          {list.map(({ Icon, name }) => (
            <td key={name} style={{ textAlign: 'center', minWidth: 100 }}>
              <Icon style={{ width: 24 }} />
              <br />
              <b>{name}</b>
            </td>
          ))}
        </tr>
        <tr>
          {list.map(({ name, version }) => (
            <td key={name} style={{ textAlign: 'center' }}>
              {version}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
export default BrowserList;
