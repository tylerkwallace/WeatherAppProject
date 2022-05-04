
import { utcConverter, dayConverter, dateBuilder, toTitleCase } from '../Utils/Converters.js';
import moment from 'moment';

test('should return number 0-7', () => {
    const utcTest = utcConverter(1648575895);
    expect(utcTest).toBe(2);
})

test("should return day of week", () =>{
    const dayTest = dayConverter(2);
    expect(dayTest).toBe("Tuesday");
})

test("Should return date", () =>{
    let date2 = moment().format('DD MMMM YYYY')
    const d = new Date();
    const dateTest = dateBuilder(d);
    console.log(date2);
    expect(dateTest).toBe(date2)
    
})

test("Should return upper case", () =>{
    const titleToCaseTest = toTitleCase('abcde');
    expect(titleToCaseTest).toBe('Abcde')
})