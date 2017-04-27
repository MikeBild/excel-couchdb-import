# excel-couchdb-import

> Import Excel Sheets to CouchDB

`excel-couchdb-import` imports Excel files (*.xls, *.xslx) into CouchDB/PouchDB documents, and transforms the sheets into JSON.

## Usage

> Document update conflicts are possible and will be ignored.

```bash
excel-couchdb-import path/to/file.xls \
  --target http://user:password@couchdbhost.com/targetdb
```

## Reimport

> Fetches revisions and update local documents by id.

```bash
excel-couchdb-import path/to/file.xls \
  --target http://user:password@couchdbhost.com/targetdb \
  --reimport
```

## Example

* [movies.xlsx](example/README.md)
* [movies-with-ids.xlsx](example/README.md)

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public [GitHub issue tracker](https://github.com/mikebild/excel-couchdb-import/issues).

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

## Thanks

You like this **excel-couchdb-import** and you want to see what coming next? Follow me on Twitter [`@mikebild`](https://twitter.com/mikebild).

Enjoy!