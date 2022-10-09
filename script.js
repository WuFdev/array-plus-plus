if (app[0].startsWith("halt ") && app[0].endsWith(";"))
{
  
  app[0] = app[0].substring(4);
  alert("A++\nProgram halted with error code " + app[0].substring(0, app[0].length - 1));
  throw new Error();
}

if (app[0].startsWith("print ") && app[0].endsWith(";"))
{
  app[0] = app[0].substring(5);
  alert(app[0].substring(0, app[0].length - 1));
}

if (app[1].startsWith("halt ") && app[1].endsWith(";"))
{
  
  app[1] = app[1].substring(5);
  alert("A++\nProgram halted with code " + app[1].replace(/\D/g, ''));
  throw new Error();
}

if (app[1].startsWith("print ") && app[1].endsWith(";"))
{
  app[1] = app[1].substring(5);
  alert(app[1].substring(0, app[1].length - 1));
}
