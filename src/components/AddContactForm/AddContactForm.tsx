export default function AddContactForm() {
  return (
    <form>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Phone
        <input type="text" name="tel" />
      </label>
      <label>
        City
        <input type="text" name="City" />
      </label>
      <fieldset>
        <legend>Has contact job?</legend>
        <label>
          <input type="radio" name="hasJob" />
          Yes
        </label>
        <label>
          <input type="radio" name="hasJob" />
          No
        </label>
      </fieldset>
      <select name="sex">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <fieldset>
        <legend>Hobbies</legend>
        <label>
          Box
          <input type="checkbox" name="hobbies" value="box" />
        </label>
        <label>
          Dance
          <input type="checkbox" name="hobbies" value="dance" />
        </label>
        <label>
          Swimming
          <input type="checkbox" name="hobbies" value="swimming" />
        </label>
        <label>
          Football
          <input type="checkbox" name="hobbies" value="football" />
        </label>
        <label>
          Skydiving
          <input type="checkbox" name="hobbies" value="skydiving" />
        </label>
        <label>
          Cycling
          <input type="checkbox" name="hobbies" value="cycling" />
        </label>
        <label>
          Cooking
          <input type="checkbox" name="hobbies" value="cooking" />
        </label>
      </fieldset>
      <label>
        Description
        <textarea name="description"></textarea>
      </label>
    </form>
  );
}
