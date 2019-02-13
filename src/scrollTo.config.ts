import { InjectionToken } from '@angular/core';

export const DEFAULT_CONFIG: InjectionToken<Ng2ScrollToConfiguration> =
	new InjectionToken<Ng2ScrollToConfiguration>('InjectionToken<Ng2ScrollToConfiguration>');

export class Ng2DefaultConfiguration implements Ng2ScrollToConfiguration {
	duration: number = 500;
	offset: number = 0;
}

export interface Ng2ScrollToConfiguration {
	duration?: number;
	offset?: number;
}
