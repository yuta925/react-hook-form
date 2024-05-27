import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Sample1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // 入力値を監視
  console.log(watch("example"));

  return (
    // handleSubmit : onSubmitが実行される前にフォームの入力値を検証する
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register : 入力値に対する制御の設定 */}
      <input defaultValue="test" {...register("example")} />
      {/* formState.errors.exampleRequired : エラーメッセージ */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors.exampleRequired : エラーメッセージ */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
