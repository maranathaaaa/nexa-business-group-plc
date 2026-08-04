/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'am';

export interface NavItem {
  id: string;
  labelEn: string;
  labelAm: string;
  href: string;
}

export interface TimelinePhase {
  id: number;
  title: string;
  titleAm: string;
  subtitle: string;
  subtitleAm: string;
  yearOrTag: string;
  yearOrTagAm: string;
  tagline: string;
  taglineAm: string;
  services: string[];
  servicesAm: string[];
}

export interface DivisionItem {
  id: string;
  name: string;
  nameAm: string;
  subtitle: string;
  subtitleAm: string;
  description: string;
  descriptionAm: string;
  iconName: string;
  color: string;
  services: string[];
  servicesAm: string[];
  isUnderDevelopment?: boolean;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  titleAm: string;
  description: string;
  descriptionAm: string;
  iconName: string;
}

export interface ServiceCapability {
  id: string;
  title: string;
  titleAm: string;
  description: string;
  descriptionAm: string;
  iconName: string;
}
