import 'react-calendar/dist/Calendar.css'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import type { PickerValue } from '@mui/x-date-pickers/internals';

export const DefaultCalendar = () => {

    const [value, setValue] = useState<PickerValue>()

    useEffect(() => {
        console.log(value)
    }, [value])

    return (
        <div className="flex items-center justify-center w-full h-80">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar  value={value} onChange={(newDate) => setValue(newDate)} sx={{
    '& .MuiPickersDay-root': {
      borderRadius: '0.5rem', // скругление дней
      fontWeight: '600',
      color: '#4B5563', // Tailwind gray-700
    },
    '& .MuiPickersDay-dayWithMargin': {
      margin: '0.25rem',
    },
    '& .MuiPickersDay-root.Mui-selected': {
      backgroundColor: '#6286ee', // Tailwind blue-600
      color: 'white',
      '&:hover': {
        backgroundColor: '#6286ee', // blue-700
      },
      '&:focus': {
        backgroundColor: '#6286ee', // blue-700
      },
    },
    '& .MuiDayCalendar-weekDayLabel': {
      color: '#6B7280', // gray-500
      fontWeight: '600',
    },
  }}/>
            </LocalizationProvider>
        </div>
    )
}