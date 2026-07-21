import S from "@sanity/desk-tool/structure-builder";

const hiddenTypes = ["workExperience"];

export default () =>
  S.list()
    .title("Portfolio content")
    .items([
      S.listItem()
        .title("Education")
        .schemaType("educations")
        .child(S.documentTypeList("educations").title("Education")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !hiddenTypes.includes(item.getId())
      ),
    ]);
