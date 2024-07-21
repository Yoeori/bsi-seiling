import { Button, Select } from "@mantine/core";
import { dateToMonth } from "../utils";
import { useCallback, useMemo } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface MonthSelectProps {
  year: number;
  month: number;
  onChange: (year: number, month: number) => void;

  minYear?: number;
  maxYear?: number;
};

function createOptions(minYear: number, maxYear: number) {
  const options = [];

  for (let year = minYear; year <= maxYear; year++) {
    for (let month = 0; month < 12; month++) {
      options.push({
        value: `${year}#${month}`,
        label: `${dateToMonth(new Date(year, month))} ${year}`,
      });
    }
  }

  return options;

}

export default function MonthSelect({ year, month, onChange, minYear, maxYear }: MonthSelectProps) {
  const options = useMemo(() => createOptions(minYear ?? 2020, maxYear ?? 2030), [minYear, maxYear]);

  const handleChange = (value: string | null) => {
    if (!value) {
      return;
    }

    const [newYear, newMonth] = value.split("#").map((value) => parseInt(value, 10));
    onChange(newYear, newMonth);
  };

  const next = useCallback(() => {
    const newMonth = month + 1;
    const newYear = newMonth > 11 ? year + 1 : year;
    onChange(newYear, newMonth % 12);
  }, [year, month, onChange]);

  const prev = useCallback(() => {
    const newMonth = month - 1;
    const newYear = newMonth < 0 ? year - 1 : year;
    onChange(newYear, newMonth < 0 ? 11 : newMonth);
  }, [year, month, onChange]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <Button color="sea" variant="subtle" size="compact-lg" onClick={prev}>
        <IconChevronLeft />
      </Button>
      <Select color="sea" data={options} onChange={handleChange} value={`${year}#${month}`} />
      <Button color="sea" variant="subtle" size="compact-lg" onClick={next}>
        <IconChevronRight />
      </Button>
    </div>
  )
}