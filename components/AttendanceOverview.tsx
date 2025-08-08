import React from 'react';
import { Section } from '@/components/ui/Section';
import { AttendanceCard } from '@/components/attendance/AttendanceCard';

export function AttendanceOverview() {
  const attendanceData = {
    month: 'August',
    present: 4,
    absent: 4,
    dayOff: 0,
    totalDays: 31,
  };

  return (
    <Section title="Attendance Details">
      <AttendanceCard data={attendanceData} />
    </Section>
  );
}