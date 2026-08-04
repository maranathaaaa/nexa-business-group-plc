/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Award,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  Cpu,
  Globe,
  Globe2,
  Hammer,
  Layers,
  Lightbulb,
  Laptop,
  RefreshCw,
  ShieldCheck,
  Target,
  TrendingUp,
} from 'lucide-react';

interface IconResolverProps {
  name: string;
  className?: string;
}

export const IconResolver: React.FC<IconResolverProps> = ({
  name,
  className = 'w-6 h-6',
}) => {
  switch (name) {
    case 'CalendarDays':
      return <CalendarDays className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Globe2':
      return <Globe2 className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    case 'Hammer':
      return <Hammer className={className} />;
    case 'RefreshCw':
      return <RefreshCw className={className} />;
    case 'Laptop':
      return <Laptop className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'Lightbulb':
      return <Lightbulb className={className} />;
    case 'Target':
      return <Target className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'BarChart3':
      return <BarChart3 className={className} />;
    default:
      return <CheckCircle2 className={className} />;
  }
};
