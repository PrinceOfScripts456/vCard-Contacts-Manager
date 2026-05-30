function vCardToJson(vcard) {
  const result = {};

  const lines = vcard.split(/\r?\n/);

  for (const line of lines) {
    if (!line || line.startsWith("BEGIN:VCARD") || line.startsWith("END:VCARD")) {
      continue;
    }

    const [rawKey, ...valueParts] = line.split(":");
    const value = valueParts.join(":").trim();

    // Extract main field name before ";"
    const key = rawKey.split(";")[0].toUpperCase();

    switch (key) {
      case "N":
        const [lastName, firstName, middleName, prefix, suffix] = value.split(";");
        result.name = {
          firstName: firstName || "",
          lastName: lastName || "",
          middleName: middleName || "",
          prefix: prefix || "",
          suffix: suffix || ""
        };
        break;

      case "FN":
        result.fullName = value;
        break;

      case "TEL":
        result.phone = value;
        break;

      case "EMAIL":
        result.email = value;
        break;

      case "URL":
        result.website = value;
        break;

      case "NOTE":
        result.note = value;
        break;

      case "VERSION":
        result.version = value;
        break;

      default:
        result[key.toLowerCase()] = value;
    }
  }

  return result;
}

module.exports = vCardToJson;