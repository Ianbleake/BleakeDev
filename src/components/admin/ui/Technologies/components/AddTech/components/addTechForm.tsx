import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SheetClose } from "@/components/ui/sheet";
import useAddTech from "@/hooks/technologies/useAddTech";
import useTechnologies from "@/hooks/technologies/useTechnologies";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { FiSave } from "react-icons/fi";
import { RiArrowGoBackFill } from "react-icons/ri";

type AddTechFormProps = {
  ownerId: string;
  onClose: () => void;
}

type AddTechFormData = {
  technology: string;
}

export default function AddTechForm({
  ownerId,
  onClose,
}: AddTechFormProps ): React.ReactElement {


  const { isLoading, technologies } = useTechnologies();

  const { control, handleSubmit, formState: { errors, isSubmitting }} = useForm<AddTechFormData>({
    defaultValues: {
      technology: '',
    }
  });

  const { mutate: addTech } = useAddTech();

  const onSubmit = (data: AddTechFormData )=>{

    const addedTech = technologies?.find((tech) => tech.id === data.technology);

    const payload = {
      owner: ownerId,
      technologyId: data.technology,
      type: "experience",
      techData: addedTech,
    };

    addTech(payload,{
      onSuccess: ()=>{
        onClose();
      },
    });

  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 px-4">

      <Controller
        name="technology"
        control={control}
        rules={{ required: "The technology is required." }}
        render={({ field }) => (
          <div className="flex flex-col gap-3">
            <Label>Type</Label>

            <Select
              onValueChange={field.onChange}
              value={field.value}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a type of work" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Technologies</SelectLabel>


                  {
                    isLoading || !technologies ? (
                      <SelectItem disabled value="no-data">No data</SelectItem>
                    ) : (
                      technologies.map((tech)=>{
                        return(
                          <SelectItem value={tech.id} key={tech.id}>{tech.name}</SelectItem>
                        )
                      })
                    )
                  }

                </SelectGroup>
              </SelectContent>
            </Select>

            {errors.technology && (
              <span className="text-red-600 text-sm">{errors.technology.message}</span>
            )}
          </div>
        )}
      />

      <div className="flex flex-row items-center justify-end gap-3">

        <SheetClose asChild>
          <Button variant={"outline"} className="shadow-emerald-500 cursor-pointer" >
            <RiArrowGoBackFill />
            Cancel
          </Button>
        </SheetClose>

        <Button type="submit" disabled={isSubmitting} className="shadow-gray-500 shadow-sm cursor-pointer">
          <FiSave />
          {isSubmitting ? "Saving..." : "Save"}
        </Button>
        
      </div>

    </form>
  );
}