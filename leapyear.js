const year = prompt('enter the year :');

if  ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
   document.write(year + "year is leap");
} else {
    document.write(year + "year is not leap");

}
