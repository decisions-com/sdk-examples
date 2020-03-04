using System.IO;
using DecisionsFramework.Design.Flow;

namespace FileSplitterStep
{
    //Use this decorator so that any public method in this class is registered as a step.
    //The string(s) argument(s) make up a list (as many as you need) of categories, so this 
    //step will appear under: SDK
    [AutoRegisterMethodsOnClass(true, "SDK")]
    public class FileSplitter
    {
        //A method that takes a full file path for a CSV file and a desired number of lines
        //and splits the file into several files each containing the number of lines specified.
        public void SplitCsvFile(string inputFilePath, int linesPerFile)
        {
            //Read the input file path.
            using (StreamReader sr = new StreamReader(inputFilePath))
            {
                //Create a File Number for use in making created file names unique.
                int fileNumber = 0;
                
                //While we're not at the end of the input file
                while (!sr.EndOfStream)
                {
                    //Create a counter to count what line we're on
                    int count = 0;
                    
                    //Create a directory based on the input file path to put the new files in
                    string splitFilesDirectoryName = inputFilePath.Replace(".csv", "");
                    Directory.CreateDirectory(splitFilesDirectoryName);

                    //Skip the first line of the file (Header Line)
                    if (fileNumber == 0 && count == 0)
                    {
                        sr.ReadLine();
                    }
                    
                    //Create the new file to write to
                    using (StreamWriter sw = new StreamWriter(splitFilesDirectoryName + "\\" + ++fileNumber + ".csv"))
                    {
                        //Flush the file writer
                        sw.AutoFlush = true;

                        //Read until we have the desired number of lines or hit the end of the file
                        while (!sr.EndOfStream && ++count < linesPerFile)
                        {
                            //Write the current line to the new file
                            sw.WriteLine(sr.ReadLine());
                        }
                    }
                }
            }
        }
    }
}