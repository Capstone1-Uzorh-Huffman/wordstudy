import JSZip from 'jszip';
import info from '../../data/info';
import SplitTable from './SplitTable';

const titleKeys = Object.keys(info[0])

const refinedData = []
refinedData.push(titleKeys)

info.forEach((item) => {
    refinedData.push(Object.values(item))
})

let csvContent = "data:text/csv;charset=utf-8," + refinedData.map(e => e.join(",")).join("\n");

const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//create a function that creates a zip file given a file from expport csv and one local file
function ExportZip(props) {
    var zip = new JSZip();
    zip.file("Exported.csv", SplitTable);
    zip.file("README.csv", blob);
    if (props.exportCSV) {
        zip.file("Exported.csv", props.exportCSV);
    }
}

export default ExportZip;
