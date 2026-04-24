/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skill, Project, CodingProfile, RoadmapItem } from './types.ts';

export const PERSONAL_DETAILS = {
  name: 'Chebattina Indra Sekhar',
  role: 'B.Tech CSE (AI & ML) Student',
  location: 'India',
  email: 'chebattinaindrasekhar@gmail.com',
  summary: 'A passionate Computer Science student focused on building strong foundations in Data Structures, Algorithms, and Machine Learning. Actively practicing problem solving and working towards becoming a skilled software engineer.',
};

export const SKILLS: Skill[] = [
  { name: 'C Programming', category: 'Language', level: 85 },
  { name: 'Data Structures', category: 'Core', level: 80 },
  { name: 'Algorithms', category: 'Core', level: 75 },
  { name: 'Problem Solving', category: 'Core', level: 90 },
  { name: 'Arrays', category: 'Concept', level: 95 },
  { name: 'Searching & Sorting', category: 'Concept', level: 85 },
  { name: 'Linked Lists', category: 'Concept', level: 60 },
  { name: 'Stacks & Queues', category: 'Concept', level: 70 },
  { name: 'Termux', category: 'Tools', level: 80 },
];

export const CODING_PROFILES: CodingProfile[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/chebattina-indra-sekhar-b3213030b/', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/Indra-sekhar', icon: 'github' },
  { name: 'CodeChef', url: 'https://www.codechef.com/users/indra_sekhar18', icon: 'code' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/indra_sekhar/', icon: 'terminal' },
];

export const PROJECTS = [
  {
    title: "Private Messenger App",
    description: "Secure messaging app for personal communication.",
    tags: ["Security", "Chat"],
    status: "Coming Soon"
  },
  {
    title: "AI Drawing Assistant",
    description: "Convert images into step-by-step drawing tutorials.",
    tags: ["AI"],
    status: "Coming Soon"
  },
  {
    title: "Sound Sync App",
    description: "Sync multiple devices for better audio.",
    tags: ["Audio"],
    status: "Coming Soon"
  }
];
export const ROADMAP: RoadmapItem[] = [
  {
    year: '2023 - Present',
    title: 'B.Tech in CSE (AI & ML)',
    description: 'Focusing on core engineering concepts and artificial intelligence fundamentals.',
  },
  {
    year: '2024',
    title: 'Mastering DSA',
    description: 'Intensive practice on CodeChef and LeetCode to build algorithmic intuition.',
  },
  {
    year: '2025',
    title: 'Project Development & Internships',
    description: 'Building AI-driven real-world applications and gaining industry experience.',
  },
  {
    year: '2026',
    title: 'Software Engineering Career',
    description: 'Securing a high-paying tech role and contributing to impactful projects.',
  },
];
