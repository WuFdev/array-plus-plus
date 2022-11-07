// A++ 3.0.0 release

if (app[0].startsWith("halt ") && app[0].endsWith(";"))
{
  
  app[0] = app[0].substring(4);
  document.write("<P style=\"color: red\">Program halted with code " + app[0].substring(0, app[0].length - 1) + ".</p>");
  throw new Error();
}

if (app[0].startsWith("exec ") && app[0].endsWith(";"))
{
  
  app[0] = app[0].substring(5);

  var F=new Function (app[0].substring(0, app[0].length - 1));

  return(F());
}

if (app[0].startsWith("print ") && app[0].endsWith(";"))
{
  app[0] = app[0].substring(5);
  document.write(app[0].substring(0, app[0].length - 1));
}
if (app[0].startsWith("module ") && app[0].endsWith(";"))
{
  app[0] = app[0].substring(7);
  import(app[0].substring(0, app[0].length - 1));
}

// the function comment doesnt do any thing does not use the ; symbol at the end
if (app[0].startsWith("comment "))
{
}
if (app[1].startsWith("halt ") && app[1].endsWith(";"))
{
  
  app[1] = app[1].substring(4);
  document.write("<P style=\"color: red\">Program halted with code " + app[1].substring(0, app[1].length - 1) + ".</p>");
  throw new Error();
}

if (app[1].startsWith("comment "))
{
}

if (app[1].startsWith("print ") && app[1].endsWith(";"))
{
  app[1] = app[1].substring(5);
  document.write(app[1].substring(0, app[1].length - 1));
}

if (app[1].startsWith("module ") && app[1].endsWith(";"))
{
  app[1] = app[1].substring(7);
  import(app[1].substring(0, app[1].length - 1));
}
