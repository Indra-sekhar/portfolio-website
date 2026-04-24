/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
  category: string;
  level: number; // 0-100
}

export interface Project {
  title: string;
  description: string;
  status: 'Planned' | 'In Progress' | 'Concept' | 'Completed';
  tags: string[];
}

export interface CodingProfile {
  name: string;
  url: string;
  icon: string;
}

export interface RoadmapItem {
  year: string;
  title: string;
  description: string;
}
